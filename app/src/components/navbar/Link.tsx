import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page:string,
    selectPage:string,
    setSelectPage:(value:string) => void
}

export default function Link({
    page,
    selectPage,
    setSelectPage
}: Props) {
    const toLowerCase = page.toLocaleLowerCase().replace(/ /g, "")
  return (
    <AnchorLink
        className={`${selectPage === toLowerCase ? " text-blue-500"  : " text-cyan-500 transition-all duration-300 hover:text-cyan-700"}`}
        href={`#${toLowerCase}`}
        onClick={() => setSelectPage(toLowerCase)}
        >
        {page}
    </AnchorLink>
  )
}