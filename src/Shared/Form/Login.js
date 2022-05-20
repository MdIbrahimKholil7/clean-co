import React from 'react';

const Login = () => {
    return (
        <div class="min-h-screen bg-base-200 flex justify-center items-center">

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form>
                    <h1 className='text-primary text-center font-bold mt-2 text-2xl'>Login</h1>
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <button class="label-text-alt link link-hover">Forgot password?</button>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                        <div class="divider">OR</div>
                        <button class="btn glass">Continue With Google</button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default Login;