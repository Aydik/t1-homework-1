import { type ChangeEvent, type FC, useState } from 'react';
import { Button, InputField, Option, SelectField } from '@admiral-ds/react-ui';
import styles from './index.module.scss';
import { Typography } from 'shared/ui/Typography';
import { useNavigate } from 'react-router-dom';
import { useTask } from 'app/context/TaskContext.tsx';
import { categories, priorities, statuses, type Task } from 'entities/TaskItem/model/types.ts';

interface Props {
  id: string;
}

export const TaskDetails: FC<Props> = ({ id }) => {
  const { tasks } = useTask();
  const task = tasks.find((task) => task.id === id);

  const navigate = useNavigate();

  const [formState, setFormState] = useState<Omit<Task, 'id'>>({
    title: task?.title || '',
    description: task?.description || '',
    category: task?.category || categories[0],
    status: task?.status || statuses[0],
    priority: task?.priority || priorities[0],
  });

  if (!task) {
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

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Submitted values:', formState);
    navigate('/');
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
        Редактировать задачу
      </Typography>
      <div className={styles.fields}>
        <InputField
          value={formState.title}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="Введите заголовок"
          label="Заголовок"
          required={true}
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
        >
          {categories.map((option) => (
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
        >
          {statuses.map((option) => (
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
        >
          {priorities.map((option) => (
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
