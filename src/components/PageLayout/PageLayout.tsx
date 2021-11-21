import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent";
import PageFooter from "./components/PageFooter";

import { ChildrenLayoutProps } from './ChildrenLayoutProps';

export default function Layout({ children }: ChildrenLayoutProps) {

  return (
    <>
      <PageHeader />
      <PageContent>
        { children }
      </PageContent>
      <PageFooter />
    </> 
  )
}