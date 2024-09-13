import Link from "next/link"

const Users = () => {
  return (
    <div>
      <Link href={'/users/1'}>Usuarios Numero 1</Link> <br />
      <Link href={'/users/2'}>Usuarios Numero 2</Link> <br />
      <Link href={'/users/3'}>Usuarios Numero 3</Link> <br />
    </div>
  )
}

export default Users
