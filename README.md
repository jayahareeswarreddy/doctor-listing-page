# Doctor Listing Page

A searchable, filterable directory of doctors, built for the Bajaj Finserv Health
campus hiring assignment. All filtering, searching and sorting happen client-side
against a single fetched dataset, and the entire result state lives in the URL.

## The interesting constraint

The dataset arrives once, from a fixed mock endpoint, and is never re-fetched. Every
interaction after that — typing in the search box, toggling a consultation mode,
picking a speciality, changing the sort — is a pure transformation of the array
already in memory.

Because that state is held in query parameters rather than component state, any view
of the list is a link. Filter down to video consultations with a dermatologist sorted
by fee, and the URL you are looking at reproduces exactly that for anyone you send it
to, including after a refresh or a back-button press.

```
src/
  hooks/useFilteredDoctors.js   fetches once, reads useSearchParams,
                                recomputes the filtered list on change
  utils/filters.js              applyFilters — the single pure function
                                that does the actual work
  components/
    AutocompleteSearch.jsx      type-ahead over doctor names
    FilterPanel.jsx             consultation mode, speciality, sort
    DoctorCard.jsx              one result
  pages/DoctorListingPage.jsx   composes the three
```

Keeping `applyFilters` pure and separate from the hook means the filtering logic can be
reasoned about — and tested — without mounting a component.

## Filters

| Group | Options |
| --- | --- |
| Mode of consultation | In-clinic · Video consult · Chat |
| Speciality | derived from the dataset, multi-select |
| Sort | by consultation fee, or by years of experience |

Search is a type-ahead over doctor names and composes with every filter above.

## Data

Doctors are loaded from the assignment's mock API:

```
https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json
```

No backend, no database, no keys.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
```

`npm run build` emits the static bundle; `vercel.json` carries the SPA rewrite so deep
links to a filtered URL resolve correctly.

## Stack

React 19, React Router 7, Tailwind CSS 4, `query-string`, Vite.

## Note

`src/test.jsx` is leftover scratch data from development and is not wired into the app.
