import "firebase/auth";
import { useFirebaseApp } from "reactfire";
const form = document.forms["signUpForm"];
export default (props) => {
  const firebase = useFirebaseApp();
  const auth = firebase.auth();
  const db = firebase.database();
  form.addEventListener("submit", function handleFormSubmit(event) {
    event.preventDefault();

    const file = form["img"].files[0];
    const userData = {
      title: form["text-title"].value,
      plural: form["text-plural"].value,
      img: "",
      traduccion: form["text-trd"].value,
    };
    const refStorage = firebase
      .storage()
      .ref(`images/${auth.currentUser}/${file.name}`);
    const task = refStorage.put(file);
    task.on(
      "state_changed",
      null,
      (err) => {
        console.log(err);
      },
      () => {
        task.snapshot.ref.getDownloadURL().then((url) => {
          userData.img = url;
          db.ref("objetos/" + auth.currentUser).set(userData);

          console.log(url);
        });
      }
    );
  });
};
