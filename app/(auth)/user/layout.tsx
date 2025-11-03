import Header from "@/components/header";
export default function UserAuthLayout(props:LayoutProps<"/user">){
    return (
        <div>
            <Header userCookie={null}/>
            <main className="center_content min-h-[calc(100vh-3.8rem)]">{props?.children}</main>
        </div>
    )
}