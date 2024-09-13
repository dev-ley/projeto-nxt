import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Especificações'

}

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      Especificações <br></br>
      {children}
    </div>
  )
}

export default layout;
