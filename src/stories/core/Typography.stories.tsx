import MbText from "../../components/text/Text";

export default {
  title: "Core/Typography",
};

export const Typography = () => (
  <section>
    <MbText tag="heading-bold" className="mb-8">
      Typography
    </MbText>
    <MbText tag="small-p" className="mb-12">
      font-family: Authentic Sans
    </MbText>
    <MbText tag="med-p" className="mb-8 mt-8">
      use the class in MbText component:
      {`<MbText tag="[typoname]"></MbText>`}
    </MbText>
    <MbText tag="heading-bold" className="mb-2">
      heading-bold
    </MbText>
    <MbText tag="heading" className="mb-2">
      heading
    </MbText>
    <MbText tag="h1-bold" className="mb-2">
      h1-bold
    </MbText>
    <MbText tag="h1" className="mb-2">
      h1
    </MbText>
    <MbText tag="h2-bold" className="mb-2">
      h2-bold
    </MbText>
    <MbText tag="h2" className="mb-2">
      h2
    </MbText>
    <MbText tag="h3-bold" className="mb-2">
      h3-bold
    </MbText>
    <MbText tag="h3" className="mb-2">
      h3
    </MbText>
    <MbText tag="sub-p-bold" className="mb-2">
      sub-p-bold
    </MbText>
    <MbText tag="sub-p" className="mb-2">
      sub-p
    </MbText>
    <MbText tag="big-p-bold" className="mb-2">
      big-p-bold
    </MbText>
    <MbText tag="big-p" className="mb-2">
      big-p
    </MbText>
    <MbText tag="med-p-bold" className="mb-2">
      med-p-bold
    </MbText>
    <MbText tag="med-p" className="mb-2">
      med-p
    </MbText>
    <MbText tag="small-p-bold" className="mb-2">
      small-p-bold
    </MbText>
    <MbText tag="small-p" className="mb-2">
      small-p
    </MbText>
    <MbText tag="big-cap-bold" className="mb-2">
      big-cap-bold
    </MbText>
    <MbText tag="big-cap" className="mb-2">
      big-cap
    </MbText>
    <MbText tag="med-cap-bold" className="mb-2">
      med-cap-bold
    </MbText>
    <MbText tag="med-cap" className="mb-2">
      med-cap
    </MbText>
    <MbText tag="small-cap-bold" className="mb-2">
      small-cap-bold
    </MbText>
    <MbText tag="small-cap" className="mb-2">
      small-cap
    </MbText>
    <MbText tag="action-cap" className="mb-2">
      action-cap
    </MbText>
  </section>
);
