import Link from "next/link";

export default function NotLoggedIn() {
  return (
    <>
      <div className="a-center">
        <div className="a-edit-container shadow-lg rounded p-3 bg-white">
          <strong>
            <div className="a-title a-center">
              <p>
                You are not signed in . Please{" "}
                <Link href="/auth/TenantSignIn">Signin</Link> to continue.
              </p>
            </div>
          </strong>
        </div>
      </div>
    </>
  );
}
