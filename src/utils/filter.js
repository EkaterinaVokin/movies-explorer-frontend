import { DURATION_MOVIES } from "./constant"

// отфильтрованы фильмы
export function filterMoviesByName (movies, name) {
  return movies.filter((item) => {
    return item.nameRU.toLowerCase().includes(name.toLowerCase())
  })
}

// фильтрация длительности фильма
export function filterMoviesByDuration (movies) {
  return movies.filter((item) => {
    return item.duration <= DURATION_MOVIES
  })
}
