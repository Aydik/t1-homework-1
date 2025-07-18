import { type ChangeEvent, type FC, useState } from 'react';
import {
  type Priority,
  PRIORITY_VALUES,
  type Category,
  CATEGORY_VALUES,
} from 'shared/model/types.ts';
import { InputField, Option, SelectField } from '@admiral-ds/react-ui';
import styles from './index.module.scss';

export const TaskFilters: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPriority, setSelectedPriority] = useState<Priority | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Category;
    setSelectedCategory((prev) => (prev === value ? null : value));
  };

  const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Priority;
    setSelectedPriority((prev) => (prev === value ? null : value));
  };

  return (
    <div className={styles.filters}>
      <InputField
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Введите название"
        label="Поиск по задаче"
      />
      <div className={styles.selectFields}>
        <SelectField
          data-container-id="selectFieldPriority"
          mode="searchSelect"
          label="Приоритет"
          value={selectedPriority ?? ''}
          onChange={handlePriorityChange}
        >
          <Option value="">— Не выбрано —</Option>
          {PRIORITY_VALUES.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </SelectField>

        <SelectField
          data-container-id="selectFieldCategory"
          mode="searchSelect"
          label="Категория"
          value={selectedCategory ?? ''}
          onChange={handleCategoryChange}
        >
          <Option value="">— Не выбрано —</Option>
          {CATEGORY_VALUES.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </SelectField>
      </div>
    </div>
  );
};
