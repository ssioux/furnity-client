function NotFound() {
  return (
    <section className="error-page-container">
      <div className="centered-container">
        <img
          src="../images/notFound.png"
          alt="furnity-logo"
          style={{ width: "10%" }}
        />

        <div className="text-container">
          <h1>Page not founded. </h1>
          <h1>Are you lost?</h1>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
