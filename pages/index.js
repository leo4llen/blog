export default function Home() {
  return (
    <>
      <p>
        green
        <span>blue</span>
      </p>

      <style jsx>{`
        p {
          color: green;
        }

        p > span {
          color: blue;
        }
      `}</style>
    </>
  );
}
