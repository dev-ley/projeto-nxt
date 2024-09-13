interface Infoparams {
  params: {
    productId: number
  }
}

const infoproduto = ({params}:Infoparams) => {
  return (
    <div>infoproduto {params.productId}

    </div>
  )
}

export default infoproduto


