import Swal from "sweetalert2";

export const showSuccessAlert = (title: string, text: string) => {
    Swal.fire({
        title,
        text,
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Ok",
    });
};

export const showErrorAlert = (title: string, text: string) => {
    Swal.fire({
        title,
        text,
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "Ok",
    });
};
