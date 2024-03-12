import { Metadata } from 'next';
import classes from './dashboard.module.css';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={classes.container}>
      {children}
    </div>
  );
}
