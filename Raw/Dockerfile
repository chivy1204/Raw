#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Raw/Raw.csproj", "Raw/"]
COPY ["DAL/DAL.csproj", "DAL/"]
RUN dotnet restore "Raw/Raw.csproj"
COPY . .
WORKDIR "/src/Raw"
RUN dotnet build "Raw.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Raw.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Raw.dll"]