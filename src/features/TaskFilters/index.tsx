import { type ChangeEvent, type FC, useEffect, useRef, useState } from 'react';
import {
  type Priority,
  PRIORITY_VALUES,
  type Category,
  CATEGORY_VALUES,
} from 'shared/model/types.ts';
import { InputField, Option, SelectField } from '@admiral-ds/react-ui';
import styles from './index.module.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDebouncedValue } from 'shared/lib/hooks/useDebouncedValue.ts';

export const TaskFilters: FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPriority, setSelectedPriority] = useState<Priority | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const debouncedSearchQuery = useDebouncedValue(searchQuery, 500);

  const isInitialLoad = useRef(true);

  useEffect(() => {
    const q = searchParams.get('q') || '';
    const priority = searchParams.get('priority') as Priority;
    const category = searchParams.get('category') as Category;

    setSearchQuery(q);
    setSelectedPriority(PRIORITY_VALUES.includes(priority) ? priority : null);
    setSelectedCategory(CATEGORY_VALUES.includes(category) ? category : null);

    setTimeout(() => (isInitialLoad.current = false), 600);
  }, [searchParams]);

  useEffect(() => {
    if (isInitialLoad.current) return;

    const params = new URLSearchParams();

    if (debouncedSearchQuery) params.set('q', debouncedSearchQuery);
    if (selectedPriority) params.set('priority', selectedPriority);
    if (selectedCategory) params.set('category', selectedCategory);

    navigate({ search: params.toString() }, { replace: true });
  }, [debouncedSearchQuery, selectedPriority, selectedCategory, navigate]);

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
