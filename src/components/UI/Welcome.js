export default function Welcome(params) {
  return (
    <>
      <h2>Нужно залогиниться!</h2>
      <button className="btn" onClick={() => setLogin(true)}>
        Войти
      </button>
    </>
  );
}
