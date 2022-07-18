import { useEffect, useState } from "react";

export default function SecureNoteInputs({ newData, setNewData }) {
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        setNewData({
            title: "",
            note: "",
        });
        setUpdate(true);
    }, []);

    return update ? (
        <div>
            <label htmlFor="title">Título</label>
            <input
                type="text"
                name="title"
                value={newData.title}
                onChange={(e) =>
                    setNewData({ ...newData, title: e.target.value })
                }
                required
            />
            <label htmlFor="note">Nota Segura</label>
            <textarea
                name="note"
                onChange={(e) => setNewData({ note: e.target.value })}
                value={newData.note}
                required
            />
        </div>
    ) : (
        <></>
    );
}
