import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

interface Prop {
    value: number;
    color: string;
}
export default function Progress(props: Prop) {
    const BorderLinearProgress = withStyles((theme) => ({
        root: {
            height: 50,
            borderRadius: 5,
        },
        colorPrimary: {
            backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
        },
        bar: {
            borderRadius: 5,
            backgroundColor: props.color,
        },
    }))(LinearProgress);
    return (
        <BorderLinearProgress variant="buffer" value={props.value} valueBuffer={0} />
    )
}