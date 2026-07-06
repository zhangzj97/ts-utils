export class Result<T> {
  public readonly success: boolean;
  public readonly code: string;
  public readonly message: string;
  public readonly data: T;
  public readonly timestamp: string;
  public readonly requestId: string;

  private constructor(
    params: {
      success: boolean;
      code: string;
      message: string;
      data: T;
      requestId: string;
      error?: unknown;
    }, //
  ) {
    this.success = params.success;
    this.code = params.code;
    this.message = params.message;
    this.data = params.data;
    this.timestamp = new Date().toISOString();
    this.requestId = params.requestId;
  }

  static create<T>(params: {
    success: boolean;
    code: string;
    message: string;
    data: T;
    requestId: string;
    error?: unknown;
  }): Result<T> {
    return new Result(params);
  }
}
