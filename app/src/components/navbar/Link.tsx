import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    page:string;
}

export default function Link({
    page
}: Props) {
  return (
    <AnchorLink>
        {page}
    </AnchorLink>
  )
}