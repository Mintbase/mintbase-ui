interface InputTagsProps {
  label: string
  tags: string[]
}

const InputTags = (props: InputTagsProps) => {
  const { label, tags } = props
  return (
    <>
      <label className="label">{{ label }}</label>
      <div className="wrap-options">
        {tags?.map((tag, index) => (
          <div key={index}>
              <div>
                  
                  </div>
            <MbChip
              isChecked={true}
              handleClick={() => null}
              disabled={false}
              label={tag}
            ></MbChip>
          </div>
        ))}
      </div>
      <input type="hidden" />
    </>
  )
}

export default InputTags
