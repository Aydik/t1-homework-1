import { type ChangeEvent, type FC, useEffect, useState } from 'react';
import { Button, Divider, InputField, Option, SelectField } from '@admiral-ds/react-ui';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { useNavigate } from 'react-router-dom';
import {
  CATEGORY_VALUES,
  PRIORITY_VALUES,
  STATUS_VALUES,
  type Task,
} from 'entities/TaskItem/model/types.ts';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from 'app/store';
import { updateTaskById, createTask } from 'entities/TaskItem/model/taskSlice.ts';

interface Props {
  id?: string;
}

/**
 * Компонент формы для создания или редактирования задачи.
 * Если передан `id`, загружает данные задачи и позволяет редактировать,
 * иначе — создает новую задачу.
 *
 * @param {Props} props - Свойства компонента
 * @returns JSX элемент формы задачи
 */
export const TaskForm: FC<Props> = ({ id }: Props) => {
  // Селектор для получения списка всех задач из состояния Redux
  const tasks = useSelector((state: RootState) => state.task.tasks);
  // Поиск задачи по id
  const task = tasks.find((task) => task.id === id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Состояние формы, без id и createdAt, так как они управляются отдельно
  const [formState, setFormState] = useState<Omit<Task, 'id' | 'createdAt'>>({
    title: '',
    description: '',
    category: CATEGORY_VALUES[0],
    status: STATUS_VALUES[0],
    priority: PRIORITY_VALUES[0],
  });

  /**
   * Заполнение формы при наличии id и найденной задачи.
   * Выполняется при изменении id или задачи.
   */
  useEffect(() => {
    if (id && task) {
      setFormState({
        title: task.title,
        description: task.description,
        status: task.status,
        category: task.category,
        priority: task.priority,
      });
    }
  }, [id, task]);

  // Если id задан, но задача не найдена — показываем сообщение об ошибке
  if (id && !task) {
    return (
      <div className={styles.notFound}>
        <Typography type="h1" variant="Header/H1">
          Задача не найдена
        </Typography>
        <Button type="button" dimension="s" appearance="tertiary" onClick={() => navigate('/')}>
          Назад
        </Button>
      </div>
    );
  }

  /**
   * Обновляет поле формы с заданным именем значением value.
   * @param {string} field - Имя поля в состоянии формы
   * @param {string} value - Новое значение для поля
   */
  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  /**
   * Обрабатывает сабмит формы.
   * Если id есть — обновляет задачу,
   * иначе — создает новую.
   * После успешного действия выполняет переход на главную страницу.
   */
  const handleSubmit = () => {
    if (formState.title.length > 0) {
      if (id) {
        dispatch(updateTaskById({ id, updatedTask: formState }));
      } else {
        dispatch(createTask(formState));
      }
      navigate('/');
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Typography type="h1" variant="Header/H1" className={styles.caption}>
        {id ? 'Редактировать задачу' : 'Создать задачу'}
      </Typography>
      <Divider />
      <div className={styles.fields}>
        <InputField
          value={formState.title}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="Введите заголовок"
          label="Заголовок"
          status={formState.title.length > 0 ? undefined : 'error'}
          required
        />
        <InputField
          value={formState.description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Введите описание"
          label="Описание"
        />
        <SelectField
          data-container-id="selectFieldCategory"
          mode="searchSelect"
          label="Категория"
          value={formState.category}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange('category', e.target.value)}
          required
        >
          {CATEGORY_VALUES.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </SelectField>
        <SelectField
          data-container-id="selectFieldStatus"
          mode="searchSelect"
          label="Статус"
          value={formState.status}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange('status', e.target.value)}
          required
        >
          {STATUS_VALUES.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </SelectField>
        <SelectField
          data-container-id="selectFieldPriotity"
          mode="searchSelect"
          label="Приоритет"
          value={formState.priority}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChange('priority', e.target.value)}
          required
        >
          {PRIORITY_VALUES.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </SelectField>
      </div>
      <div className={styles.buttons}>
        <Button type="submit" dimension="s" appearance="primary">
          Сохранить
        </Button>
        <Button type="button" dimension="s" appearance="secondary" onClick={() => navigate('/')}>
          Отменить
        </Button>
      </div>
    </form>
  );
};
