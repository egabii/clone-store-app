
import { ChildrenLayoutProps } from '../../ChildrenLayoutProps';

export default function ContentLayout({ children } : ChildrenLayoutProps) {
  return (
    <section className="Content"> 
    { children }
    </section>
  );
}