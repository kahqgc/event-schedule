import "./Button.css";

export default function EditButton({ handleEdit }) {
    return (
        <button type="submit" className="edit" onClick={handleEdit} >
            Edit
        </button>
    )
}

//reusable button component that triggers handleEdit when clicked