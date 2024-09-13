interface Infouser {
    params: {
        usersId:number
    }
}

const userId = ({params}:Infouser) => {
  return (
    <div>
      users {params.usersId}
    </div>
  )
}

export default userId
