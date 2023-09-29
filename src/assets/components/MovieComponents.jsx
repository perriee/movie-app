import React from 'react';

export const MovieComponents = ({ movies }) => {
  const imageUrl = 'https://image.tmdb.org/t/p/original';

  return (
    <div className="flex flex-wrap justify-around gap-10">
      {movies.map((movie) => (
        <div key={movie.id} className="flex flex-col w-[20rem] shadow-lg rounded-lg bg-slate-900">
          <div className="w-full h-full">
            <img src={`${imageUrl}${movie.poster_path}`} alt={movie.title} className="rounded-lg h-full" />
          </div>
          <div className="flex flex-col p-4">
            <div className="text-slate-300 text-lg font-bold tracking-wide">{movie.title}</div>
            <div className="text-slate-500">Release: {movie.release_date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
