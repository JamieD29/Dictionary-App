import React from "react";

export const Synonym = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-3">
      {mean.map((val) =>
        val.meanings.map((means) =>
          means.synonyms.map((syn) => {
            return <li>{syn}</li>;
          })
        )
      )}
    </div>
  );
};
