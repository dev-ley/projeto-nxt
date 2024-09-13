import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Produtos'

}

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      Area de Produtos <br></br>
      {children}
    </div>
  )
}

export default layout;
