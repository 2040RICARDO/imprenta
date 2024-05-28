import {useEffect} from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import {Head, Link, useForm} from '@inertiajs/react';
import {InputText} from "primereact/inputtext";
import {Checkbox} from "primereact/checkbox";


export default function Login({status, canResetPassword}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    function setChecked(checked) {
        return undefined;
    }

    return (
        <GuestLayout>
            <Head title="Log in"/>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}


            <div className="flex align-items-center justify-content-center flex-column bg-yellow-100 h-screen">
                <div className="surface-card p-6 sm:p-4 shadow-2 border-round w-full lg:w-4">
                    <div className="text-center mb-5">
                        <div className="text-900 text-3xl font-medium mb-3">Bienvenido</div>
                        <span className="text-600 font-medium line-height-3">Ingrese su usuario y contraseña</span>
                        {/* <Link  href={route('register')} className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Registrar!</Link> */}
                    </div>
                    <form onSubmit={submit}>
                        <div>
                            <div className="mb-3">
                                <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
                                <InputText
                                    id="email"
                                    type="text"
                                    placeholder="Email "
                                    className="w-full"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} className=""/>
                            </div>
                            <div className="mb-3">
                            <label htmlFor="password" className="block text-900 font-medium mb-2">Contraseña</label>
                            <InputText
                                id="password"
                                type="password"
                                placeholder="Contarseña"
                                className="w-full"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                                <InputError message={errors.password} className=""/>
                            </div>

                            <div className="flex align-items-center justify-content-between mb-6">
                                <div className="flex align-items-center">
                                    <Checkbox inputId="rememberme-login"
                                              onChange={(e) => setData('remember', e.target.checked)}
                                              checked={data.remember} className="mr-2"/>
                                    <label htmlFor="rememberme-login">Recoradar</label>
                                </div>

                                {canResetPassword && (
                                    <a
                                        href={route('welcome')}
                                        className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
                                    >
                                       Regresar
                                    </a>
                                )}
                            </div>

                            <PrimaryButton label="Ingresar" className="w-full" disabled={processing}/>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
