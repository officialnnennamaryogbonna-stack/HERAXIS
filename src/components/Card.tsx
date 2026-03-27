import { PropsWithChildren, ReactNode } from 'react';

interface CardProps extends PropsWithChildren {
  title?: string;
  action?: ReactNode;
}

const Card = ({ title, action, children }: CardProps) => {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-rose-100">
      {(title || action) && (
        <header className="mb-3 flex items-start justify-between gap-2">
          {title ? <h3 className="text-base font-semibold text-calm-700">{title}</h3> : <span />}
          {action}
        </header>
      )}
      {children}
    </section>
  );
};

export default Card;
