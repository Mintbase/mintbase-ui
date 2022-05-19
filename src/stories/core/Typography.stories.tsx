import { MbText } from '../../components/text/Text'

export default {
  title: 'Core/Typography',
}

export const Typography = () => (
  <section>
    <MbText className="heading-130 mb-8">Typography</MbText>
    <MbText className="p-small-90 mb-12">font-family: Authentic Sans</MbText>
    <MbText className="p-med-90 mb-8 mt-8">
      use the class in MbText component:
      {`<MbText className="[typoname]"></MbText>`}
    </MbText>
    <MbText className="display-130 mb-2">display-130</MbText>
    <MbText className="display-90 mb-2">display-90</MbText>
    <MbText className="heading-130 mb-2">heading-130</MbText>
    <MbText className="heading-90 mb-2">heading-90</MbText>
    <MbText className="h1-130 mb-2">h1-130</MbText>
    <MbText className="h1-90 mb-2">h1-90</MbText>
    <MbText className="h2-130 mb-2">h2-130</MbText>
    <MbText className="h2-90 mb-2">h2-90</MbText>
    <MbText className="h3-130 mb-2">h3-130</MbText>
    <MbText className="h3-90 mb-2">h3-90</MbText>
    <MbText className="p-sub-130 mb-2">p-sub-130</MbText>
    <MbText className="p-sub-90 mb-2">p-sub-90</MbText>
    <MbText className="p-big-130 mb-2">p-big-130</MbText>
    <MbText className="p-big-90 mb-2">p-big-90</MbText>
    <MbText className="p-med-130 mb-2">p-med-130</MbText>
    <MbText className="p-med-90 mb-2">p-med-90</MbText>
    <MbText className="p-small-130 mb-2">p-small-130</MbText>
    <MbText className="p-small-90 mb-2">p-small-90</MbText>
    <MbText className="cap-big-130 mb-2">cap-big-130</MbText>
    <MbText className="cap-big-90 mb-2">cap-big-90</MbText>
    <MbText className="cap-med-130 mb-2">cap-med-130</MbText>
    <MbText className="cap-med-90 mb-2">cap-med-90</MbText>
    <MbText className="cap-small-130 mb-2">cap-small-130</MbText>
    <MbText className="cap-small-90 mb-2">cap-small-90</MbText>
    <MbText className="action-cap mb-2">action-cap</MbText>
  </section>
)
