import MbText from "../../components/text/Text";

export default {
  title: "Core/Typography",
};

export const Typography = () => (
  <section>
    <MbText className="heading-bold mb-8">Typography</MbText>
    <MbText className="small-p mb-12">font-family: Authentic Sans</MbText>
    <MbText className="med-p mb-8 mt-8">
      use the class in MbText component:
      {`<MbText className="[typoname]"></MbText>`}
    </MbText>
    <MbText className="heading-bold mb-2">heading-bold</MbText>
    <MbText className="heading mb-2">heading</MbText>
    <MbText className="h1-bold mb-2">h1-bold</MbText>
    <MbText className="h1 mb-2">h1</MbText>
    <MbText className="h2-bold mb-2">h2-bold</MbText>
    <MbText className="h2 mb-2">h2</MbText>
    <MbText className="h3-bold mb-2">h3-bold</MbText>
    <MbText className="h3 mb-2">h3</MbText>
    <MbText className="sub-p-bold mb-2">sub-p-bold</MbText>
    <MbText className="sub-p mb-2">sub-p</MbText>
    <MbText className="big-p-bold mb-2">big-p-bold</MbText>
    <MbText className="big-p mb-2">big-p</MbText>
    <MbText className="med-p-bold mb-2">med-p-bold</MbText>
    <MbText className="med-p mb-2">med-p</MbText>
    <MbText className="small-p-bold mb-2">small-p-bold</MbText>
    <MbText className="small-p mb-2">small-p</MbText>
    <MbText className="big-cap-bold mb-2">big-cap-bold</MbText>
    <MbText className="big-cap mb-2">big-cap</MbText>
    <MbText className="med-cap-bold mb-2">med-cap-bold</MbText>
    <MbText className="med-cap mb-2">med-cap</MbText>
    <MbText className="small-cap-bold mb-2">small-cap-bold</MbText>
    <MbText className="small-cap mb-2">small-cap</MbText>
    <MbText className="action-cap mb-2">action-cap</MbText>
  </section>
);
