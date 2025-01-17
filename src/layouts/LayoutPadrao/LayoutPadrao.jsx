import { Cabecalho, Conteudo, Rodape } from "../../components";
import { Outlet } from "react-router-dom";
import { useAppContext} from "../../hooks";

import { Inicial } from "../../pages";
import { useContext } from "react";
import { AppContext } from "../../contexts";

const LayoutPadrao = () => {
    const { criador } = useAppContext();
    return (
        <>
            <Cabecalho nomeUsuario="Isabelle"/>
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape criador={criador} />
        </>
        
    );
};

export { LayoutPadrao };