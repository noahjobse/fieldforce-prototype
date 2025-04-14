// File: /app/forms/FormsContext.tsx
import React, { createContext, useContext, useState } from 'react';

export type FormEntry = {
  title: string;
  date: string;
  type: string;
};

type FormsContextType = {
  forms: FormEntry[];
  addForm: (form: FormEntry) => void;
};

const FormsContext = createContext<FormsContextType | undefined>(undefined);

export function FormsProvider({ children }: { children: React.ReactNode }) {
  const [forms, setForms] = useState<FormEntry[]>([]);

  const addForm = (form: FormEntry) => {
    setForms(prev => [form, ...prev]);
  };

  return (
    <FormsContext.Provider value={{ forms, addForm }}>
      {children}
    </FormsContext.Provider>
  );
}

export function useForms() {
  const context = useContext(FormsContext);
  if (!context) throw new Error('useForms must be used within a FormsProvider');
  return context;
}
