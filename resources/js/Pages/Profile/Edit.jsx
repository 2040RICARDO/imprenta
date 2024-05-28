import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Edit({ auth, mustVerifyEmail, status,permisos }) {
    return (
        <Layout permisos={permisos}>
            <Head title="Profile" />

            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="card">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    {/* <div className="card">
                        <DeleteUserForm className="max-w-xl" />
                    </div> */}
                </div>
            </div>
        </Layout>
    );
}
