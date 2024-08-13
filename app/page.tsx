import Editor from "@components/Editor";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="screen absolute top-0 left-0 bg-[#eee] px-0 py-[9px]">
      <Editor />
    </div>
  );
};

export default page;
