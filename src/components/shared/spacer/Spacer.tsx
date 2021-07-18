type PropsType = {
   height: number;
};

export default function Spacer(props: PropsType) {
   return <div style={{ height: props.height }}></div>;
}
