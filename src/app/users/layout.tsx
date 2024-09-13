import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Usuarios'
}

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <h1>Area de Usuarios</h1> <br />
      {children}
    </div>
  )
}

export default layout
