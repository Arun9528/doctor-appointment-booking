import Sidebar_Speciatly from "@/components/sidebar_speciatly";

export default async function Doctorlayout(props: LayoutProps<"/doctors">) {
  
  return (
    <main className="responsive_left-right_padding grid max-lg:gap-y-6 sm:grid-cols-[30%_70%] md:grid-cols-[20%_80%] lg:grid-cols-[17%_83%] xl:grid-cols-[15%_85%] sm:mt-10 min-h-[calc(100vh-10.08rem)] lg:gap-x-10">
      <Sidebar_Speciatly/>
      {props?.children}
    </main>
  );
}
