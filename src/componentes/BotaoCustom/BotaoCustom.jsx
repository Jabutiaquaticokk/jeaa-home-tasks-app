import './BotaoCustom.css';

function BotaoCustom(props) {
    const classes = ["BotaoCustom_root"];

    switch (props.tipo) {
        case "primario":
            classes.push("BotaoCustom_primario");
            break;
        case "secundario":
            classes.push("BotaoCustom_secundario");
            break;
        default:
            break;
    }

    return (
        <button className={classes.join(" ")} onClick={props.aoClicar}>
            {props.children}
        </button>
    );
}

export default BotaoCustom;