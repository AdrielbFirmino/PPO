import { ModalBackground, CloseButton } from "../../pages/Profile/ProfileStyled"
import { ModalContentSong } from "./SongModalStyled"

const SongModal = (props) => {
  return (
    <ModalBackground>
      <ModalContentSong>
        <CloseButton onClick={props.closeModalSong}>&times;</CloseButton>
        <h2>Publicar uma nova Música</h2>
        <form onSubmit={props.findAllUserSongs}>
          <label>Nome:</label>
          <input
            type="text"
            placeholder="Insira aqui o nome da sua música"
          />
          <label>Link da imagem:</label>
          <input
            type="text"
            placeholder="Insira aqui link da imagem da sua música"
          />
          <label>Como você classificaria essa música?</label>
          <section>
            <div>
              <i className="bi bi-emoji-laughing"></i>
              <p>Feliz</p>
              <input type="radio" name="feeling" />
            </div>
            <div>
              <i className="bi bi-emoji-frown"></i>
              <p>Emocionante</p>
              <input type="radio" name="feeling" />
            </div>
            <div>
              <i className="bi bi-emoji-heart-eyes"></i>
              <p>Apaixonante</p>
              <input type="radio" name="feeling" />
            </div>
            <div>
              <i className="bi bi-emoji-sunglasses"></i>
              <p>Relaxante</p>
              <input type="radio" name="feeling" />
            </div>
          </section>
          <button type="submit">Salvar</button>
        </form>
      </ModalContentSong>
    </ModalBackground>
  )
}

export default SongModal