import Text from "../../components/text/Text";

export default {
  title: "Core/Typography",
};

export const Typography = () => (
  <section>
    <Text tag="heading-bold" className="mb-8">
      Typography
    </Text>
    <Text tag="small-p" className="mb-12">
      font-family: Authentic Sans
    </Text>
    <Text tag="med-p" className="mb-8 mt-8">
      use the class in Text component:
      {`<Text tag="[typoname]"></Text>`}
    </Text>
    <Text tag="heading-bold" className="mb-2">
      heading-bold
    </Text>
    <Text tag="heading" className="mb-2">
      heading
    </Text>
    <Text tag="h1-bold" className="mb-2">
      h1-bold
    </Text>
    <Text tag="h1" className="mb-2">
      h1
    </Text>
    <Text tag="h2-bold" className="mb-2">
      h2-bold
    </Text>
    <Text tag="h2" className="mb-2">
      h2
    </Text>
    <Text tag="h3-bold" className="mb-2">
      h3-bold
    </Text>
    <Text tag="h3" className="mb-2">
      h3
    </Text>
    <Text tag="sub-p-bold" className="mb-2">
      sub-p-bold
    </Text>
    <Text tag="sub-p" className="mb-2">
      sub-p
    </Text>
    <Text tag="big-p-bold" className="mb-2">
      big-p-bold
    </Text>
    <Text tag="big-p" className="mb-2">
      big-p
    </Text>
    <Text tag="med-p-bold" className="mb-2">
      med-p-bold
    </Text>
    <Text tag="med-p" className="mb-2">
      med-p
    </Text>
    <Text tag="small-p-bold" className="mb-2">
      small-p-bold
    </Text>
    <Text tag="small-p" className="mb-2">
      small-p
    </Text>
    <Text tag="big-cap-bold" className="mb-2">
      big-cap-bold
    </Text>
    <Text tag="big-cap" className="mb-2">
      big-cap
    </Text>
    <Text tag="med-cap-bold" className="mb-2">
      med-cap-bold
    </Text>
    <Text tag="med-cap" className="mb-2">
      med-cap
    </Text>
    <Text tag="small-cap-bold" className="mb-2">
      small-cap-bold
    </Text>
    <Text tag="small-cap" className="mb-2">
      small-cap
    </Text>
    <Text tag="action-cap" className="mb-2">
      action-cap
    </Text>
  </section>
);
