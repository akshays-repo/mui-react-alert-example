import { showAlertConfirmarion } from "mui-react-alert";

const Button = () => {
  return (
    <button
      onClick={() => {
        showAlertConfirmarion({
          title: "Use Google's location service?",
          cancelLabel: "DISAGREE",
          confirmLabel: "AGREE",
          subtitle:
            "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
          onConfirmation: function (): void {
            alert("Say hello");
          },
        });
      }}
    >
      Show alert dialog
    </button>
  );
};

export default Button;
