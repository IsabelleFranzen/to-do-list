import { useState } from 'react';
import { useAppContext } from '../../../hooks';
import { Botao, TIPO_BOTAO, CampoTexto, Loading } from '../../../components';
import style from './ListaTarefasItem.module.css';

const ListaTarefasItem = (props) => {
const { id, nome } = props;

const [editando, setEditando] = useState(false);

const { editarTarefa, removerTarefa, loadingEditar, loadingDeletar } = useAppContext();

const onBlurTarefa = (event) => {
    const nomeTarefa = event.currentTarget.value;

    editarTarefa(id, nomeTarefa)

    setEditando(false)
};

const loadingEditando = loadingEditar == id;
const loadingDeletando = loadingDeletar == id;


    return(
        <li className={style.ListaTarefasItem}>
                {(loadingEditando || editando) && (
                    <CampoTexto 
                        defaultValue={nome}
                        onBlur={onBlurTarefa} 
                        autoFocus 
                    />
                )}

                {!loadingEditando && !editando && (
                    <span onDoubleClick={() => setEditando(true)}>{nome}</span>
                )}

                {loadingEditando && (
                    <Loading />
                )}

                <Botao texto={loadingDeletando ? <Loading/> : '-'} 
                tipo={TIPO_BOTAO.SECUNDARIO} 
                onClick={() => removerTarefa(id)}
                />
            </li>
    );
};

export { ListaTarefasItem };