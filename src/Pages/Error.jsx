function Error() {
  return (
    <section className="error-page-container">
      <div className="centered-container">
        <img
          src="../images/error.png"
          alt="furnity-logo"
          style={{ width: "10%" }}
        />

        <div className="text-container">
          <h1>There is an error. </h1>
          <h1>Sorry for the inconvenience,</h1>
          <h1>Our developers are working on it! </h1>
        </div>
      </div>
    </section>
  );
}

export default Error;
