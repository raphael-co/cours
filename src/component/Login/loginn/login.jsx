import ImpLogin from '../impLogin/impLogin.jsx'

function Login({ logName1, value, action, ButtonNameLogEnvoie1 }) {

  const logNameenvoie = (t) => {
    logName1(t)
  }
  const actionenvoieName = (t) => {
    ButtonNameLogEnvoie1(t)
  }

  return (
    <div className="App">

      <ImpLogin
        logNameenvoie1={logNameenvoie}
        valueName={value}
        action1={action}
        actionenvoieName1={actionenvoieName}
      ></ImpLogin>

    </div>
  );
}

export default Login;