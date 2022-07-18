import { useEffect, useState } from "react";

export default function SecureNoteInputs({ newData, setNewData }) {
    const [update, setUpdate] = useState(false);
    const [secureNoteData, setSecureNoteData] = useState({
        title: "",
        note: "",
    });

    useEffect(() => {
        setNewData({
            ...secureNoteData,
        });
        setUpdate(true);
    }, [secureNoteData]);

    return update ? (
        <div>
            <label htmlFor="title">Título</label>
            <input
                type="text"
                name="title"
                value={secureNoteData.title}
                onChange={(e) =>
                    setSecureNoteData({
                        ...secureNoteData,
                        title: e.target.value,
                    })
                }
                required
            />
            <label htmlFor="note">Nota Segura</label>
            <textarea
                name="note"
                onChange={(e) =>
                    setSecureNoteData({
                        ...secureNoteData,
                        note: e.target.value,
                    })
                }
                value={secureNoteData.note}
                required
            />
        </div>
    ) : (
        <></>
    );
}
