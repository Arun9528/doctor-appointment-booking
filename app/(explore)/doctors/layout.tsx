import Sidebar_Speciatly from "@/components/sidebar_speciatly";

export default async function Doctorlayout(props: LayoutProps<"/doctors">) {
  
  return (
    <main className="px-20 grid grid-cols-[15%_85%] mt-10 min-h-[calc(100vh-10.08rem)] gap-x-10">
      <Sidebar_Speciatly/>
      {props?.children}
    </main>
  );
}
