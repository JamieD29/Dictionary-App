import React from "react";

export const Antonym = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-3">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.antonyms.map((anto) => {
            return <li>{anto}</li>;
          })
        )
      )}
    </div>
  );
};
